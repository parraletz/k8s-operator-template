import { describe, expect, it, vi } from 'vitest'
import { k8sCustomObjects } from '../../src/client'
import { watchExampleCRD } from '../../src/controllers/example.controller'

vi.mock('../../src/client/k8s', () => ({
  k8sCustomObjects: {
    listNamespacedCustomObject: vi.fn()
  }
}))

describe('Example Controller', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should process crds successfully', async () => {
    ;(k8sCustomObjects.listNamespacedCustomObject as any).mockResolvedValue({
      body: {
        items: [
          {
            metadata: {
              name: 'example-crd'
            },
            spec: {
              message: 'Hello, world'
            }
          }
        ]
      }
    })

    await watchExampleCRD()

    expect(k8sCustomObjects.listNamespacedCustomObject).toHaveBeenCalledTimes(1)
  })

  it('should handle errors', async () => {
    const error = new Error('Failed to fetch resources')

    ;(k8sCustomObjects.listNamespacedCustomObject as any).mockRejectedValue(
      error
    )
    const consoleErrorSpy = vi.spyOn(console, 'error')

    await watchExampleCRD()
    expect(consoleErrorSpy).toHaveBeenCalledWith(error)
    expect(k8sCustomObjects.listNamespacedCustomObject).toHaveBeenCalledTimes(1)
  })
})
