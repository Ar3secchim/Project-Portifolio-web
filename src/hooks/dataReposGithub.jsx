export default function filterReposGithub(data, keyWordDeploy) {
  let dataFilter = []

  dataFilter = data.filter((item) => item.topics.includes(keyWordDeploy))
  dataFilter.map((item) => ({
    id: item.id,
    name: item.name,
    html_url: item.html_url,
    description: item.description,
    topics: item.topics,
    homepage: item.homepage,
  }))

  console.log(dataFilter)
  return dataFilter
}
