const sdk = require('node-appwrite')

module.exports = async function (req, res) {
  const client = new sdk.Client()

  res.json({
    areDevelopersAwesome: true,
  })
}
