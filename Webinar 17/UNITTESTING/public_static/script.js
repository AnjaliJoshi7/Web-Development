$(function () {

    let kmBox = $('#km')
    let minbox = $('#min')
    let calcBtn = $('#calcfare')
    let fareDiv = $('#fare')
    let rateBtn = $('#getrates')
    let rateDiv = $('#rates')

    calcBtn.click(function () {
        $.post('./calcfare', {
            km: kmBox.val(),
            min: minbox.val()
        }, function (data) {
            fareDiv.text('Fare : ' + data.fare)
        })
    })

    rateBtn.click(function () {
        $.get('/rate', function (data) {
            let prettyRateData = `
            Fixed Fare = Rs. ${data.fixed} for ${data.minKm} KM
            <br>
            Fare (Distance) = Rs. ${data.perKm} /KM 
            <br>
            Fare (waiting) = Rs. ${data.perMin} / Min (after first ${data.freeMin} min)
            `

            rateDiv.html(prettyRateData)
            //rateDiv.text(JSON.stringify(data))
        })
    })


})