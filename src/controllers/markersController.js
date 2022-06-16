import markers from "./../models/Marker.js"

class MarkerController{

  static getAllMarkers = (req, res) => {
    markers.find((err, markers) => {
      res.status(200).json(markers)
    })}
    
  static getMarker = (req, res) => {
    const id = req.params.id
    markers.findById(id).exec((err, markers) => {
      if(err){
        res.status(400).send({message: `${err.message} - ID do marcardor não localizado`})
      }
      else{
          res.status(200).send(markers)
      }
    })
  }

  static postMarker = (req, res) => {
    let marker = new markers(req.body)
    
    marker.save((err) => {
      if(err){
        res.status(500).send({message: `${err.message} - Falha ao cadastrar marcador `})
      }
      else{
        res.status(201).send(marker.toJSON())
      }
    })
  }

  static removeAllMarkers = (req, res) => {

    markers.remove({}, (err) => {
      if(!err){
        res.status(200).send({message: `Todos marcadores excluídos com sucesso`})
      }
      else{
          res.status(500).send({message: err.message} - 'Erro ao excluir todos marcadores')
      }
    })
  }

  static removeMarker = (req, res) => {
    const id = req.params.id
    markers.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: `Marcador excluído com sucesso`})
      }
      else{
          res.status(500).send({message: err.message})
      }
    })
  }

  static updateMarker = (req, res) => {
    const id = req.params.id

    markers.findByIdAndUpdate(id, {$set: req.body}, (err) => {
        if(!err){
          res.status(200).send({message: "Marcador atualizado com sucesso"})
        }
        else{
            res.status(500).send({message: `${err.message} - Erro para atualização de marcador`})
        }
    })
}
  
}

export default MarkerController