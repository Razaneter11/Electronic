let counters = {
    subhanAllahCounter: 0,
    alhamdulillahCounter: 0,
    allahuAkbarCounter: 0,
    astaghfirullahCounter: 0
};

function incrementCounter(counterId) {
    counters[counterId]++;
    document.getElementById(counterId).innerText = counters[counterId];
}