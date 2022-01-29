const { Post } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/posts', (req, res) => {
    Post.create(req.body)
      .then(post => {
        const message = `Le post ${req.body.title} a bien été crée.`
        res.json({ message, data: post })
      })
  })
}