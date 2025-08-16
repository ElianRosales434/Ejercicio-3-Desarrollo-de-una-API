import books from '../database.js';
import { v4 as uuidv4 } from 'uuid';


function create (req,res){
    const body = req.body;

    const newBook = {
    id: uuidv4(),
    title: body.title,
    author: body.author,
    year: body.year
   
}
res.json(newBook);
}


function update (req,res){
    const id = req.params.id
    const body = req.body;

    

}

function getAll (req,res){
    res.json(books)
}



function deletebyId (req,res){
    const id = req.params.id
     const bookDelete = books.indexOf(id);
     books.splice(bookDelete,1);

        res.json({
            message: "Eliminado con éxito",
            id:id
        }
        )
}

export {
    deletebyId,
    getAll,
    create,
    update
}