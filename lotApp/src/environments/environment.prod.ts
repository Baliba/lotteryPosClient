// ng serve --host  192.168.0.140 --live-reload=false
// ng build --aot --prod

// git remote add origin https://github.com/Baliba/cpledika.git
  // git add.
// git commit - m "initial commit"
// git push - u origin master

// git remote add origin

// "start:host": "ng serve --host 192.168.1.8 --disable-host-check",
// "start:electron": "ng build --base-href ./ && electron .",


// set NODE_OPTIONS=--max_old_space_size=8096

let prod = false;
let server = "localhost";
let port = "8080";
export const token = 'fasfyyAh129999sdg7fsafeGSGgjajhha127SHHwetyHwihd828yudbzbBbdavh378bsdbfjfhdf8834rbbdfmsdfn78';
export const getUrl = (name: any) => (prod) ? `https://${name}.herokuapp.com/api/` : 'http://'+ name +':'+port+'/api/' ;
// tslint:disable-next-line:prefer-const
// let url =  () => { let nom =  sessionStorage.getItem('url_backend'); return nom; };
let url =  () => {  return server; };
// const name = sessionStorage.getItem('url_backend');
// **** DONT NOT FORGET TO SET "PRODUCTION" TO "TRUE" ***///
export const environment = {
      production: prod,
      node: false,
      apiUrl    : getUrl(url())
 };

