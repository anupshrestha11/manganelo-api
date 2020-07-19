const {
  Manganelo,
  SearchOrderBy,
  SearchStatus,
  SearchType,
  MangaGenre,
  MangaStatus,
} = require("@pepeenv/manganelo");

const manganelo = new Manganelo();

//? fn to get manga info
const getMangaInfo = async (id) => {
  const manga = await manganelo.getMangaByID(id);
  console.log(manga);
  return manga;
};

//? fn to get the chapter of manga
const getMangaChapter = async (mangaId, chapterId) => {
  const chapter = await manganelo.getChapterPanels(
    `${mangaId}`,
    `${chapterId}`
  );
  return chapter;
};

//? fn to get Hot mangas
const getHotMange = async (page, orderBy) => {
  const hotManga = await manganelo.searchManga({
    page: page,
    orderBy: SearchOrderBy[`${orderBy.toUpperCase()}`],
  });
  return hotManga;
};

//? fn to search mangas a/c to searchword
const getSearchedManga = async (searchWord) => {
  const searchResult = await manganelo.searchManga({
    searchKey: SearchType.EVERYTHING,
    searchWord: `${searchWord}`,
  });
  return searchResult;
};

//? fn to get mangas based on status
const getMangaByStatus = async (status) => {
  const mangas = await manganelo.searchManga({
    status: SearchStatus[`${status.toUpperCase()}`],
  });
};

module.exports = {
  getMangaInfo,
  getHotMange,
  getMangaChapter,
  getSearchedManga,
  getMangaByStatus,
};
