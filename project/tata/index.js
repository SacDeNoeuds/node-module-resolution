// import localforage from "localforage"
import { LRUCache } from "lru-cache"
import { fuse } from "../../library/fuzzy/index.js"
import { defineEventHandler } from "../../library/h3/index.js"

const main = () => {
  console.info("--- Tata ---")
  console.info("library dep – fuzzy", fuse.name)
  console.info("library dep – h3", defineEventHandler)
  console.info("global dep - lru-cache", LRUCache)
  // console.info("dep not in tree – localforage", localforage.toString())
}
main()
