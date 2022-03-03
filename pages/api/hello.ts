// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import prisma from 'lib/prisma'

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: number
  name: string
  slug: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const accounts = await prisma.account.findMany();
  res.status(200).json(accounts)
}
