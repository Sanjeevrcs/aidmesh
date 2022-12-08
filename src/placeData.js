const placeData = {
  type: 'geojson',
  data: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          description: `
            <div>
                <p><Strong>Needs : </Strong> Food, Shelter</p>
                <p><Strong>No. of People : </Strong>5</p>
                <p><Strong>Priority : </Strong>Medium</p>
            <div>
            `,
          icon: 'hospital',
        },
        geometry: {
          type: 'Point',
          coordinates: [76.9886437, 11.0796991],
        },
      },
      {
        type: 'Feature',
        properties: {
          description: `
            <div>
                <p><Strong>Needs : </Strong> Food</p>
                <p><Strong>No. of People : </Strong>11</p>
                <p><Strong>Priority : </Strong>High</p>
            <div>
            `,
          icon: 'hospital',
        },
        geometry: {
          type: 'Point',
          coordinates: [76.98648761901863, 11.080010239649043],
        },
      },
    ],
  },
};
export default placeData;
