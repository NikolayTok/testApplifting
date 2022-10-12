export const getDateCreate = (createdAt: string) => {
  const dateCreate = new Date(createdAt);

  return `${dateCreate.getDate()}/${
    dateCreate.getMonth() + 1
  }/${dateCreate.getFullYear()}`;
};
