// const lyrics = 'amar sonar bvangla ami tmai valobasi';
// const doesExist = lyrics.includes('sonar');
// const dosExist = lyrics.includes('Tmai');
// console.log(doesExist);
// console.log(dosExist);

const lyrics = 'amar sonar bvangla ami tmai valobasi';
console.log(lyrics.indexOf('ami'));
if(lyrics.indexOf('sonar') !== -1){
    console.log('Exist');
}
else{
    console.log('Not exist');
}