from pyhatchbabyrest import PyHatchBabyRestAsync
import asyncio
import sys, json

def chance_hatch(cmd):
    '''
        rest = PyHatchBabyRestAsync()

        loop = asyncio.get_event_loop()

        r = loop.run_until_complete

        r(rest.power_on())

        r(rest.set_volume(90))

        r(rest.power_off())

    '''
    return f'Python File: Connected to Chance\'s Hatch and executing {cmd}'


cmd = json.loads(sys.argv[1])
result = chance_hatch(cmd)
print(json.dumps(result))



