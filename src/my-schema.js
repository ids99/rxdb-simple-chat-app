export const mySchema = {
  title: "my schema",
  description: "hello schema",
  type: "object",
  properties: {
    id: {
      type: "string",
      primary: true
    },
    message: {
      type: "string"
    },
    device: {
      type: "string"
    }
  }
}
