import concurrent.futures

import muffin


app = muffin.Application("process_executor")


TO_CALCULATE = [i * 100 for i in range(1, 21)]


def primes_from(kmax):
    """
    from: http://docs.python-guide.org/en/latest/scenarios/speed/
    """
    p = list(range(1000))
    result = []
    if kmax > 1000:
        kmax = 1000
    k = 0
    n = 2
    while k < kmax:
        i = 0
        while i < k and n % p[i] != 0:
            i = i + 1
        if i == k:
            p[k] = n
            k = k + 1
            result.append(n)
        n = n + 1
    return result


@app.register("/serial/")
def serial(request):
    return {i: primes_from(i) for i in TO_CALCULATE}


@app.register("/concurrent/")
def process_concurrent(request):
    with concurrent.futures.ProcessPoolExecutor() as executor:
        futures = {executor.submit(primes_from, i): i for i in TO_CALCULATE}

    return {futures[f]: f.result() for f in concurrent.futures.as_completed(futures)}
