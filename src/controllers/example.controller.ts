import { k8sCustomObjects } from '@/src/client'

const GROUP = 'cloudscouts.xyz'
const VERSION = 'v1'
const PLURAL = 'examples'

export async function watchExampleCRD() {
  try {
    const res = await k8sCustomObjects.listNamespacedCustomObject({
      group: GROUP,
      version: VERSION,
      plural: PLURAL,
      namespace: 'default'
    })
    const resources = res.body
    for (const resource of resources.items) {
      console.log(resource)
      console.log(`Message: ${resource.spec.message}`)
    }
    console.log(res.body)
  } catch (error) {
    console.error(error)
  }
}
