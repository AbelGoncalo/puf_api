import prisma from '~/data/'

export const list = async ctx => {
  try {
    const users = await prisma.user.findMany()
    ctx.body = users
  } catch (error) {
    ctx.status = 500
    ;(ctx.body = 'Ops! Algo  deu errado,'), error, 'tente novamente.'
    return
  }
}

export const create = async ctx => {
  try {
    const user = await prisma.user.create({
      data: ctx.request.body,
    })

    ctx.body = user
  } catch (error) {
    ctx.status = 500
    ;(ctx.body = 'Ops! Algo  deu errado,'), error, 'tente novamente.'
    return
  }
}

export const update = async ctx => {
  const data = {
    name: ctx.request.body.name,
    email: ctx.request.body.email,
  }

  //quando chave e valor sao iguais, short hand
  try {
    const user = await prisma.user.update({
      where: { id: ctx.params.id },
      data: data,
    })
    ctx.body = user
  } catch (error) {
    ctx.status = 500
    ;(ctx.body = 'Ops! Algo  deu errado,'), error, 'tente novamente.'
    return
  }
}

export const remove = async ctx => {
  try {
    ctx.body = { id: ctx.params.id }

    await prisma.user.delete({
      where: { id: ctx.params.id },
    })
  } catch (error) {
    ctx.status = 500
    ;(ctx.body = 'Ops! Algo  deu errado,'), error, 'tente novamente.'
    return
  }
}
