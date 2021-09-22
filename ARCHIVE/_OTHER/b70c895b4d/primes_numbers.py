from concurrent.futures import ProcessPoolExecutor, as_completed
import sys


TO_CALCULATE = range(1000, 15000, 1000)


def primes_until(num):
    result = []
    for p in range(2, num + 1):
        for i in range(2, p):
            if p % i == 0:
                break
        else:
            result.append(p)
    return result


def run_serial():
    print({i: primes_until(i) for i in TO_CALCULATE})


def run_multiprocess():
    waits = {}
    with ProcessPoolExecutor() as executor:
        waits = {executor.submit(primes_until, i): i for i in TO_CALCULATE}
        print({waits[future]: future.result() for future in as_completed(waits)})


if __name__ == "__main__":
    """
    To run serial
    $ python primes_numbers.py
    To run multiprocess
    $ python multi_requests.py multiprocess
    """
    if len(sys.argv) > 1 and sys.argv[1] == "multiprocess":
        run_multiprocess()
    else:
        run_serial()
