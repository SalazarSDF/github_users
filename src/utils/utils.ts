export function setQuery(s: string) {
  const url = new URL(window.location.href);
  url.searchParams.set("q", s);
  history.pushState({}, "", url);
}
export function getQuery() {
  const url = new URL(window.location.href);
  const param = url.searchParams.get("q");
  return param ? param : "";
}

export function setUrlPage(page: number) {
  const url = new URL(window.location.href);
  url.searchParams.set("page", String(page));
  history.pushState({}, "", url);
}
export function getUrlPage() {
  const url = new URL(window.location.href);
  const param = url.searchParams.get("page");
  console.log(param);
  return param ? Number(param) : 0;
}
