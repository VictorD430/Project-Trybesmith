export type NewProdResponse = Promise<{
  status: number,
  data: object | object[],
}>;