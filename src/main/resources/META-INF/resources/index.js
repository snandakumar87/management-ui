if (!!window.EventSource) {

    var eventSource = new EventSource("/transaction/stream");

    eventSource.onmessage = function(event) {

        data = JSON.parse(event.data);

        var row = '<tr><td>' + data.data.transactionId + '</td><td>' + data.data.transactionAmount + '</td><td>' ;
         if(data.data.fraudAlert !== 'null') {
           row+= data.data.fraudAlert + '</td><td>';
         } else {
           row+= '</td><td>';
         }
         if(data.data.amlAlert !== 'null') {
          row+= data.data.amlAlert + '</td><td>';
         } else {
         row+='</td><td>';}


         if(data.data.amlAlert==='null' && data.data.fraudAlert==='null'){
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