const express = require('express')
const router = express.Router()
const path = require('path')
const blogsdata = require('../Data/Blogs')

router.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../Templates/index.html'))
    res.render('home', {blogs: blogsdata.blogs})

})

router.get('/blog', (req, res) => {
    // Blogs.blogs.forEach(element => {
    //     console.log(element.title);
    //     console.log(element.content);
    // });
  res.sendFile(path.join(__dirname, '../Templates/bloghome.html'))

})


router.get('/blogpost/:slug', (req, res) => {
    myBlog = blogsdata.blogs.filter((e)=>{
       return e.slug == req.params.slug

    })
    console.log(myBlog)
    
  res.sendFile(path.join(__dirname, '../Templates/blogPage.html'))

})

module.exports = router