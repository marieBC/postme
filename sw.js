self.addEventListener('install', (event) => {   //INSTALACION
    console.info('[SW] Install ...');
});

self.addEventListener('activate', async (event) => { //ACTUALIZAR EL SREVICE WORKER
    console.info('[SW] Activate ...');
});

self.addEventListener('fetch', (event) => { //TODAS LAS PETICIONES QUE VAYAMOS HACIENDO LAS ATIENDE.
    console.info('[SW]  Fetch...');
});