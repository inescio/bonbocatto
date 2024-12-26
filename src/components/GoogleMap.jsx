function GoogleMap() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <iframe
          src=" https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d730.7721291034204!2d-66.8152853701376!3d-29.394943572478564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1735245921572!5m2!1ses!2sar"
          width="600" 
          height="450"
          style={{
            border: 0,
            width: '100%', // Asegura que el ancho sea el 100% del contenedor
            maxWidth: '600px', // Máximo ancho del iframe
            height: '450px', // Altura del iframe
            aspectRatio: '4/3', // Mantener aspecto incluso en responsive
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
  
    export default GoogleMap; 

