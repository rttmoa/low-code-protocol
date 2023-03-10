import { importAll } from '@/utils/importAll'





export function createPageList(files, base) {
  // console.log(files)
  // console.log(base)

  return importAll(files).reduce((acc, cur) => {

    // console.log(acc)

    let slug = cur.fileName.substr(2).replace(/\.mdx$/, '');

    return {
      ...acc,
      [slug]: { ...cur.module.default, href: `/${base}/${slug}` },
    }
  }, {})
}
