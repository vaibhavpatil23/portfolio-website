console.log("script running.......");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hambu').addEventListener('click', () => {
  document.querySelector('.sitebar').classList.toggle('sitebargo');
  if(document.querySelector('.sitebar').classList.contains('sitebargo')){
    document.querySelector('.ham').style.display = 'inline'
    document.querySelector('.cross').style.display = 'none'
  }
  else{
    document.querySelector('.ham').style.display = 'none'
    setTimeout(()=>{
        document.querySelector('.cross').style.display = 'inline'
    },500)
  }
});
