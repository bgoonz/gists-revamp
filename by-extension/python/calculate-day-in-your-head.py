#!/usr/bin/env python3
# -*- coding: utf8 -*-


# module __future__
# Record of phased-in incompatible language changes.

# Each line is of the form:

#     FeatureName = "_Feature(" OptionalRelease "," MandatoryRelease ","  
#                               CompilerFlag ")"  
# where, normally, OptionalRelease < MandatoryRelease, and both are 5-tuples of the same form as sys.version_info:

#     (PY_MAJOR_VERSION, # the 2 in 2.1.0a3; an int  
#      PY_MINOR_VERSION, # the 1; an int  
#      PY_MICRO_VERSION, # the 0; an int  
#      PY_RELEASE_LEVEL, # "alpha", "beta", "candidate" or "final"; string  
#      PY_RELEASE_SERIAL # the 3; an int  
#     )  
# OptionalRelease records the first release in which

#     from __future__ import FeatureName  
# was accepted.

# In the case of MandatoryReleases that have not yet occurred, MandatoryRelease predicts the release in which the feature will become part of the language.

# Else MandatoryRelease records when the feature became part of the language; in releases at or after that, modules no longer need

#     from __future__ import FeatureName  
# to use the feature in question, but may continue to use such imports.

# MandatoryRelease may also be None, meaning that a planned feature got dropped.

# Instances of class _Feature have two corresponding methods, .getOptionalRelease() and .getMandatoryRelease().

# CompilerFlag is the (bitfield) flag that should be passed in the fourth argument to the builtin function compile() to enable the feature in dynamically compiled code. This flag is stored in the .compiler_flag attribute on _Future instances. These values must match the appropriate #defines of CO_xxx flags in Include/compile.h.

# No feature line is ever to be deleted from this file.



"""
Short algorithm to compute the day of the week of any date, given by its year, month and day.
Not so easy to learn and do in your head, but managable.

- Idea from http://www.commandlinefanatic.com/cgi-bin/showarticle.cgi?article=art009
"""

from __future__ import print_function


days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
adjustment = [0, 1, -1, 0, 0, 1, 1, 2, 3, 3, 4, 4]


def day_offset(y, m, d):
    # Add 1 if y > 2000 to account for the fact that 2000 was a leap year.
    year_offset = (y - 2000) + ((y - 2000) // 4) + (y > 2000)
    # Account for wrongly computed leap years
    year_offset -= (y - 2000) // 100

    # Add back 1 year if the target year is a leap year but the target day
    # is after the 29th (in other words, the leap day hasn't happened yet).
    if y % 100:
        year_offset += (y < 2000) and not (y % 4) and (m > 2)
        year_offset -= (y > 2000) and not (y % 4) and (m < 3)

    # Read month offset from the adjustment table
    # by default each month has 30 days, and the adjument corrects that
    month_offset = ((m - 1) * 2) + adjustment[m - 1]

    # Remove today as we count from 0
    day_offset = d - 1

    return (year_offset + month_offset + day_offset) % 7


if __name__ == "__main__":
    import datetime
    from sys import argv

    assert len(argv) >= 4, "Need three arguments: '$ {} y m d'".format(argv[0])
    y, m, d = int(argv[1]), int(argv[2]), int(argv[3])
    offset = day_offset(y, m, d)
    # Saturday, Jan. 1, 2000 is the reference date
    date = (offset + 5) % 7
    import datetime as dt

    today = datetime.datetime.today()
    then = datetime.datetime(y, m, d)
    verb = "will be" if today < then else "was" if today > then else "is"
    print("The date {}/{}/{} {} a {}.".format(d, m, y, verb, days[date]))
