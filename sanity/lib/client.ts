import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sk24w2Xsyv22Pzx81jazUzC8VJSKAtCSPlotFqJzwGbjMkJQbBGRH48uzE22pRRRmLYyFejY1YGn0tldallAAfqC6pBCj0m6GJ4vKuIYzCUGBdUaKzYrm3XQPJwFfPmO0Blpey1WflRpqSQ3DzowDfURbmijOuioUoKN4L5BZ8AkzdnKgtCg"
})
