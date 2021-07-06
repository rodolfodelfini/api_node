const port  = process.env.PORT;
module.exports = (app) => {
  app.listen(process.env.PORT || port, () => {
    console.log(`Server is running at localhost:${port}`)
  })
}
