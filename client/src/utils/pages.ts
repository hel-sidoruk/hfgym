export const getPageCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};

export const getPagesArray = (totalPages: number) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }
  return result;
};

function setPages(num: number) {
  const number = Number(num);
  return [number - 1, number, number + 1];
}

export function paginationFunction(pagesArray: number[], page: number) {
  const lastPage = Number(pagesArray[pagesArray.length - 1]) || 5;
  let beforePage, middlePage, afterPage;

  if (page <= 2) {
    [beforePage, middlePage, afterPage] = setPages(3);
  }

  if (page > 2) {
    [beforePage, middlePage, afterPage] = setPages(page);
  }

  if (page >= lastPage - 1) {
    [beforePage, middlePage, afterPage] = setPages(lastPage - 2);
  }
  return [1, beforePage, middlePage, afterPage, lastPage];
}
