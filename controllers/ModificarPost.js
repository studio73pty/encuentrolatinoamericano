const handleModificarPost = (req, res, db) =>{
    const { id } = req.params;
     const { 
        titulo,
        descripcion,
        tiempo
        } = req.body;

               db('posts').where({ id: id }).update({     
                titulo,
                descripcion,
                tiempo
             }).then(res.status(200).json('post actualizado'))
          
         
         }
 module.exports = {
     handleModificarPost: handleModificarPost
 }