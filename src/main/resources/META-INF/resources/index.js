if (!!window.EventSource) {

    var eventSource = new EventSource("/transaction/stream");

    eventSource.onmessage = function(event) {

        data = JSON.parse(event);
        var row = '<tr><td>' + data.transactionId + '</td><td>' + data.transactionAmount + '</td><td>' ;
         if(data.fraudAlert !== 'null') {
           row+= data.fraudAlert + '</td><td>';
         } else {
           row+= '</td><td>';
         }
         if(data.amlAlert !== 'null') {
          row+= data.amlAlert + '</td><td>';
         } else {
         row+='</td><td>';}


         if(data.amlAlert==='null' && data.fraudAlert==='null'){
            row+='<div class="icon"><i class="ni ni-check-bold"></i></td>'

         } else {
            row+='<div class="icon"><i class="ni ni-fat-remove"></i></td>';

         }



         row+='</tr><tr width="200px" id="svg" style="width:100%"></tr>';

        $('#tbody').append(row);
    };



} else {
    window.alert("EventSource not available on this browser.")
}

function checkout(transactionId) {

window.open("/TransactionDetails.html?txnId="+transactionId, '_blank');


}