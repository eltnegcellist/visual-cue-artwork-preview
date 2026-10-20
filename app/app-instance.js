// Separate the deployed work-branch instance from other Pages apps on this origin.
(()=>{
// GitHub Pages repositories on the same account share an origin. Trial
// preferences must not read, overwrite or clear the production app's settings.
function createScopedStorage(storage,prefix='emma_visual_cue_app_v1:'){
 const keys=()=>Array.from({length:storage.length},(_,i)=>storage.key(i)).filter(k=>k?.startsWith(prefix));
 return {
  get length(){return keys().length;},
  key(index){return keys()[index]?.slice(prefix.length)??null;},
  getItem(key){return storage.getItem(prefix+key);},
  setItem(key,value){storage.setItem(prefix+key,String(value));},
  removeItem(key){storage.removeItem(prefix+key);},
  clear(){for(const key of keys())storage.removeItem(key);}
 };
}

for(const key of ['localStorage','sessionStorage']){
 Object.defineProperty(window,key,{configurable:true,value:createScopedStorage(window[key],'emma_visual_cue_app_v1:')});
}
const factory=window.indexedDB;
if(factory)Object.defineProperty(window,'indexedDB',{configurable:true,value:new Proxy(factory,{
 get(target,key){
  if(key==='open')return (name,...args)=>target.open(name==='mitsukotoba-conversation-history'?'mitsukotoba-conversation-history-visual-cue-app-v1':name,...args);
  const value=Reflect.get(target,key,target);return typeof value==='function'?value.bind(target):value;
 }
})});
})();
