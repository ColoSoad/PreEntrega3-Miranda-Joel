//BASE DE DATOS FICTICIA 
const datosPropiedad = [{tipo: 'Casa', factor: 1.09},
                        {tipo: 'P.H.', factor: 1.05},
                        {tipo: 'Depto. Edificio', factor: 1.02},
                        {tipo: 'Barrio Privado', factor: 1.19}]

/* 
    {tipo: 'Local comercial', factor: 1.21},
    {tipo: 'Depósito de logística', factor: 1.34} 
*/

const datosUbicacion = [{tipo: 'CABA', factor: 1.13},
                        {tipo: 'Tandil', factor: 1.07},
                        {tipo: 'Costa Atlántica', factor: 1.29},
                        {tipo: 'Patagonia', factor: 1.00},
                        {tipo: 'Montevideo', factor: 1.11}]

const costoM2 = 211.07

// costoM2 * 50 * 1.05 * 1.13 = $ 12.521,72