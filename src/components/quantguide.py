from math import comb

def compute_expectations():
    E = [0] * 7  # E[6] = 0, E[0] will be the final answer

    for k in reversed(range(6)):
        seen = k
        unseen = 6 - k

        # Probabilities based on unordered outcomes
        total_outcomes = 21

        # p0: 0 new faces
        p0 = (seen + comb(seen, 2)) / total_outcomes  # doubles + both seen pairs

        # p2: 2 new faces (both faces in the pair are unseen)
        p2 = comb(unseen, 2) / total_outcomes

        # p1: 1 new face (exactly one face in the pair is unseen)
        p1 = 1 - p0 - p2

        # Compute expectation using the recurrence
        denom = 1 - p0
        next1 = E[k + 1] if (k + 1) <= 6 else 0
        next2 = E[k + 2] if (k + 2) <= 6 else 0
        E[k] = (1 + p1 * next1 + p2 * next2) / denom

    return E

# Compute and print all expectations
expectations = compute_expectations()
for k in range(7):
    print(f"E[{k}] = {expectations[k]:.6f}")

# Final answer
print(f"\nExpected number of rounds to see all 6 faces: {expectations[0]:.6f}")