$(document).ready(function(){
    $('.Data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('__');
        let id_baris = rid[1];
        let nama = $('#nama__'+id_baris).text();
  
        if(isi=='Hapus'){
            let konfirmasi = confirm(`Serius lu mau hapus coy..! ${nama} ??`);
            if(!konfirmasi) return;
  
            $('#info__'+id_baris).fadeOut();
  
        }else{
            alert("lu milih : " + $(this).html() + "!");
        }
    })
  })