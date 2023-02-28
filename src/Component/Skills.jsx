import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

function MySkills() {
  return (
    <Box as={Container} maxW="7xl" mt={14} p={4} id="skill">
      <Heading mb={20} color={"rgb(240, 158, 6)"}>
        My Skills
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      ></Grid>
      <Divider mt={12} mb={12} />
      <Text fontSize="4xl" color={"rgb(240, 158, 6)"} mb={12}>
        Technical Skills
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
      >
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(252,73,11) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAn1BMVEX8SQv////8RgD8QAD8QwD9nIf8XjT9rJz/5Nz8OwD8RwD8OQD//vz8VCP8NAD9gmT/9PD/6+b/+Pb8UhX/9fD9o47+3dX9l33+wbP+yLn+1cn+sJz+0cT+uKf8YTD/7+n+zML9c039jXP9iGn8WSz9gV78akD9p5H8akf+t6T9eFX8Uxr8Zjb+saL8WyP9oIf9fWH9elT9jXH+vLD+zb4Es9aEAAAMoklEQVR4nOWd61bbOhCFY9mB2E5DLuQKSUgIgRKgtPT9n+3Y57SURjOzbcmyYs7+2bVc9MW2NJrZGreCY3WXm0OrmTpsll2Np3X8D4tRrHyP1FgqHi0Q4SRsLl8uFU4A4ajZgBniSCacpb5HaK10JhLeRr4HaK3oViR8avpDmj2mT5+ecCUSbj7BU7r5n7+H7dD3AK0VtkXC509A+CwSvsW+B2it+E0knH8CwrlIuPgEMc1CJOx8AsKOSNjv+R6gtXp9kTD4BISBTJj4HqC1EkD40vTAVL0Awn3jCfeA8KLpgWl0AQinTQ/bwikgHDeecAwIrxpPeAUIl00PTOMlIPzZ9LAt/QkIJ40nRBnhQdPDtt4AEK4bP9OsAWHf9wit1QeEw12zwza1GwLCbsMDU7U/riBq9cPHZgem0eMxkEbY8NBbC7x1wm2zJ9NwCwm/NZzwGyRseOitBd464azZoXc8g4QNzwkf54MJwgm6h0nkUygXGB8H3jphB6wWatPxqQ0ISKIOJByAX0nLZdUrFHIlx1sLnfDyICOqF91YVZ+6IJ+bHC6PL9EIuztwExOvhGhwO210GmFwBp6D1CshmOnVmXaJToje5ePaTq1CtTG10S7RCe/AZKolQuoUSiNFd9olOiHKeqfXdaAwugaEWsabIkRZbz0uqlEoptQy3hQhyglrKdc6ZTA4nRDZMcLzOlAYnaMHbK5dohNeI0L9Ua9PaJKI9UlCJ4TTlZYnqFEox0JM9DrhAC2qPgNTFJamWlhKEA4R4XGhvE4hm0F6nC2lCAO0BVY1kHBCydxUv4QgRJtM4n+pTejXP7aaBCQhfBK0DUptujR4gwhC5ISOtW10beqAlezYAZ2LIEQzsp4KqU0oiUStZAQhckITq2pdgtFIW7+GIDSIjOqSSURJEJ5w6G0yNIIQ/lD6DqUuwZ0d8XgRhHCX+YMfwnPbpcYwaCOmCIIQOaGJTMG7LtLQpWBIQyxkBCHM9jzwhJ5rc1SWjCAcgveQyNi9y7NpLNYDb4rQIOv6rhu/lSsqW00RAsNJcuAzphOvT6mifnuCMHgoXf14V8erV4WcISjCVxCY6hWsd122fJr9o9eChMiOIYXeX3wS6kYMhhCF3lLW26uligq8ScJ7i6w3qno4VXhfkBAtarqj44+8HkIl9wQUIQy9NVdO8V/Hqch9HUWIcsLkC13w13EqsvBHEaKcsJT19mrHIfLBDCFaDzWH4x+tffrEo6KEa/Af6S7VD/LqhD/2eHOEl8COkbwQIfxveVzxkx2VyaUIoRM6EcwKK39LPv1sUYQwJ6w5/j/I45JP5YMZQhR6a6c2Psjjkk8G3jThDwvDiUcHbkSmyEhClG2RcsIeHbh0rEUSovsg5YQ9Lvl0vEwSQteKEHp7PBpG73lIQpRPkrLew1C5EiJMbwoTLiwMJ8P9mSuhZoex5vFmCTvgPZSy3g6FCpshmT8iCQfggfBkOEGhliKXaZLwUv6fssDULQoj2NGCNBiQhAHwensynKBo+UBeRROiY5bHHVLqEaoY7ciraEL0xHtxQsOaGD070ITfUWDqw3AC65rfyctoQhh6kyuPY6F4kA68GUKTerlzGfoLaELoeXgjL3Mr1C2P2Q/QhDD0fiYvcyvU8ZApNtCEqP8HWQJxLVgwOu758Z9oQuiEviUvcyvUeZTJPNCEaJNH53wcC+XHmOwRTThEi+uKvMytUJ6yR2dxaUIUICXHTbPr0AgEy0woyRCizDXhNnYuwzExhGijEtUfmPbR7pDZ0jGE6K0W7BiuhI5gc7MfQ4hmZq0/v3shMxK3gjGE0Aldf+gN02NMFMIQQjsGmbhzqhtESBkxApbw6+k5oeFu4Ct9HUMIQ2/mB3MoU5cPQ4ic0GrzfO5E92zhzvR8MkMIe0IrRz5nvjQJjx4yCxhD6M1SkbKhBGrR1WMK0wxh31edU7EmCOR6DZnfhiEcevqiTjLiCLugm4XirmQIu54sFWrFWXX6wLnKXskQwmfCkYi+Fr+0RoUG7owER4jsGI5E2ylywYofdyVHuPVEyNoeYcabu5Ij9NT1mq8uo4w3eyVHiGKkbNrjZUHIOgSM40iOEIXerdEXXhaErMsDOmCYwJslLOCE7nKy6J/Jm+SNSykcIXRCS/0/zAn5gw4w8OayDhwhPBcueL1tCNnsCJrc2TP0HCGyY0hOaAtC2jCSCwXetBFDILRyQpsTsofGcH9jzvPKEV6CMDCRWu8ZE6oRN87uCxjPF66XBUcIG9MlgtfbmDDRelX/1hCFpezBVpYQhd5EJxh7Qn6csGsOeziZJYRbasEJbU7IjhPW+9iZjyU0rEfaEfLjNK/ZsoRwhaVrypaE7Dhh3Z2NQFhCGye0MSE/TnPbMkuIvB2SE9qckE00wx+c9b+whKZlAitC/sEwL6SwhLDUIwSm5oTsOGGzPbYYxhLCcp0QmJoTslsLdNiIL2iyhANAePzp5GoI2XGiTzGH7PLMEg4BoWTHMJ9p2K0FMmKEbIjFEgZolDFP+JqaZVsjrvYQBChtFLGD4QkN7Su5rqerXlzyPqowTS64XIuNwYcnRE++7IQeLO/CNIyK3UsVxunT/UTYj10ikxY/K/CE9k7oyfmmFaPOR0kUR2fTG2GnksvQAS0TVuKEXl+3H+KY/aJBFKYvt2/CLuW3DB3QMiFK30mh99+Us21CvJbZi5durjrg5v0SDLz5s2Y8oaEll1Zn+V19eGBVFIe79nXx/vUWpmWesGondHcx3iRpRhnF8dntrMCj+UEWPzdP6MIJPbiZrpLXoo/mBxk6oHPxhPDlNnNCd0vT5YIZB37a4wlhZoSfoKsXWrqErBFPCJ3QQuhduWD4wT8ZPGGAWu/RR8XcCB2mE4JkgRC13jvU97GSLmohJriyBUJoOBG6Y1QsWEURzg4IhMgJrepzQqNWftL5D4HwhJzQpg7oXALhCTmhTR3QuQRCGHrX54S2afIgENpkvSuWTY88gfCEnNA2fQ4FQuyEXhjFmKU1XKCvbEm9KgVC+BFylba2c9fHg/rzbQum7qRSn0CIWu/ljFE6upu5W/nXs7tRWiCdRTbb+yWBcF0oUZZk2/X90gXkerkP+RTP37+08PcFwj7KmP75A3FvfzWoMkztDq72vbhoXjkZCe+KQDgs44RWYbr/VlWQM/m2T2H/9Y9/fCVMeQJht6QTWoXhbmof5yymO9xe/ugvPwjPj0Bo4ITO7mS0/Wn+uHZ/bqNSd+8/8d5pQIhCb+bPperH3GTmWc9/qNTsT0opI4nQ2AkdpclrkUz2Bw3eXhMzvBawgkqEKPQWIeNo/7XonRx83Udla1V/EUrfFJEIoRNaVraGrO476KXsds5XxdcFWqwDGhHadz3OZp6ntlA1607aTwYzi0YoNZORCCtpgajCeLelA+Pr7Q4W3wpJLINJhFV9yiGDTG7nf9/J7vw2qQavBfIpEiE6AV9G2TJ38R6ir2cXofHESf3nUk5MIkQ5vLLjiKPH5SAYLB+tJk5K0qQtEQ5RY7rSimJ1pqrGayUHaScuEQboI+QmcnDqLxHrCyIhqoeciOQakUiIst4nIrnjkUhofm6iVsnf7xUJPR1CLCv5G8wiIfoS4olI/o62SIic0CciuQOgSOj1gyPFJXdxFAlR1vtEJGW8AWHH6+c4CqsnlmpFQuhbPQ2FIoNM2IjlQl4sAGG/oAXWp5SSi0MyYbAITz2siUKQhAaEQadcfr1m5bUE5AhBhEEwmZ5Vlm6oVCqMz6a4VIIJ84zY+OTuZH73xpL3vRRhDjk4fyp9wMCZorj3dF60mleQMNd6+aBi75OrimL1UKYiW4Iw+Lfq3KoySVZaUdoqW1UvRxj86xxIUk/Na9LEwBlRmjBT93pqUuWzUl6ZnJYw99sR5lq0z8pWam3wwrO2aXXZlDDT5D4/DuMcL4rjh3sLh4AFYabB1cbtGpKtC5urcrXWagkz9d82UUHXS0nlZ742b9aeK2vCTJfzu0MaVguZhOnhbs71KymjKggz9W+2o+qm12ziHG1vKnLMVUQY5A7CdtKrAFKFvaRdoeuxOsJck/EqtNpRRmG4GlfrH6+WMFPnahMaTq9RHG6uKj8AUDlhkJtHHssvlNmy9/jVbl2g5YIw03D2KByOPVaS480cGY4dEWYa3lwciiQHsq364QKddLaQO8Ign16nL/JCmS17L1O3dnGnhJmGk/GIW0OydWE0nrh2w7smzNW5X+nTazZxru7rODlVB2GmzvPmowcjjzifazoYVhNhkPeReA1z373Kds+vSxfrAq36CDMN59P9aD+d13MQ5Zf+AYuz7uuL/GkpAAAAAElFTkSuQmCC"
            w={20}
          />
          <Text>HTML</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(38,77,228) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA2FBMVEUmTeT///8pZfHr6+soWevy8evv7+sgSeT39/cQQuQQW/C8y/obR+SutugVROQjS+RUb+Z2iOaYpOciYvFbhfSAnfUAPOKlufgzV+QAWPAAOeInVegpY/AcX/EnVukAN+LZ3vnx8/22v/Rpfua8w+muuPPt8P2RoO/N1PfFzfb2+P6DlO3a3eqds/c8XeXO2fuUrPdFdvKElOdke+rk5/tHZOdSbuh1iOuvwfnN0uqPnu+dqejW2/nk5uuOqPaYr/dnjfRLe/M2b/JzlfVjivTR1epUgPO1vekJZLFrAAAN80lEQVR4nN3da1vaShcGYFCBHUwTlRo5VtF6QkXruXW3trWH//+PdoJ2V2ZmrWeyZgYuXd923wvM/RKGh8xaoVJ9Xqtx5eVXvDplqkz9134y78PzUMk+I9yN5n14HiraZYTLr0K4zAgPsnkfnofKThnh5asQXjLCvVdxlu4xwmqczvv4nCuNq5yw8gqEKmn6P8eNeR+gczXGrPDiFQgvWOHRy49t8RErfAWxTQltqvDu5X9cRBus8BXENiW0qcIZxLbUc6nPnx2wwq3gwt6S5+qpwi1WOOyGFi4teK4l5Q90h6ywGvx96F34bvo8TaMqL+yFjm3ehcoRpz0gvAodavwLp5+/cQWEKy9OqDy/Gto04U3o2BZaGN8A4acXL/wEhHehg6l3obI0RndAuB3648K3sKUKt4HwMHSo8S5Unj87BMLgsc23cKAKt4Bw76UJ1dCW7QHh6MUJlfdhNgLCahQ4tvkWqqEtUUGaMHQw9S6cfvp0CQqvA8c230Ll6RvXUBg6tgUWaqFNF56/cOE5FN4Hjm2ehX1l2UjuoTB0bAss1EKbLgwd2zwLYWjThf++LKEW2v6Fwr3AV9s8C7UrbWpo04U4tiWRS6VNlxpoQhTadCHcJE3W3rjU72WX+qIS1WuJBo/2L2MgjN7X6g71j/YHy9StKlRj6Vh7iC5EsS16U190KDfhvSpUDk4PbQYh2gZO1mrzE64j4Y6FEG0Dx+dzFH5tKULlLaVuABuFayC2xTdzFH5ThFpoW7MQou69xsochd/7vFDp2jML0TZwOp6jsK8IcWgzCFFsSyvzW0uHTeVtiEObQYi699L489yEex010qjCS+0xuhBuA0fHcxNuaULlfdjVQptBWN0Ewuyjy2nqJDxUz1IltFU29ccYhA0Y2+YmvFWFamhLrYRoG9gttjkJT1CkUTeAzUIc2+YmFIQ2kzBsbHMSPqihTT00PbSZhKh7zy22OQl/gViqdu0RwrCxzUkoCG0mYdjY5iRsgtCmdu0RQtS9lzbmJlQ/8LXQdqA/xiCEQxddB6CTUAttmlAPbSbhEAkzl9jmIoShLRtaCUdo6MIptrkID0BoSxt6LDUJ4SapU2xzEcLQpnbtUUIc22rycgDqoQ117VFC1L2Xjlfk9estql+nhmOalHY9WDkwrWuPEsJt4LQhr3ctVB1S+KAK1Sttq4YHmYRBhy7wzkzHsOQ/1ltBaDMKT+YsNCyIj/UBhTa1a48SBt0GhsL+gAJWF9TQBjeACWHQoQss/E4BRwN0LdEQ2ozCoN17UNj6RglxaFO79ihh0G1gLPxBCfXQpjy3vgFMCOHVtqDCwQMlPBVcaSOEIaeBsfCMEi6j0BabHmUUhpyVxcIN0yEVtYFCm74BTAlDDl1AYdPwPf2xRKHNLAzZvYeFZGhD1xL1rj1SGLJ7Dwrp0PZD3R5VheqoBS0MOXSBX0PTkj8pFNoSU2gzC0PGNiwkY6kWaWxCm1kYsnsPCZlYqn7gW2wAU8KQsQ0KyVg6FIU2szDk0AUStt5Swku4AWx8BxuFwyRcqEFCJrSBa4lpbHwHG4Uhb3EChV8oIQxthMX4r+05Ck8oIezaa5cQBhy6QEI6tAm69mjhTrhQA4XGJb8oWWgjhHBWNo2l1WsN2OoYl/yi1NAG52M5IereS8er0jpa5+thSAnVrj1VaOjao4VwG/hiDlf1tQ1g5aDMoY0QotjWuBJvksp3Zlrlu/ZoIeze681+72kEQ5vetUcLA3bviYU4tJm/WJqFI9jbJt4GFgtRaKtsmr92mYVVFEzl28BioRba1A1g45U2Uohim3wbWCwUhjZKGG7oQiw8Q6FtpZRwB3Xv3c1cCEOboWuPEYbr3hMLtVEL9ZAMXXuM8Ax1763OXPgNRBoitFFCi9g2ayHcHjV07THCcN17YqH6YaGFNuKLJSGE3XvprIWSUQtOCLv3IiFQLJSGNkoIb5ksHrqQCmHXXjQsJYSbpNlP4QeiVIhGLajQRgrR9URxbJMKYdceKSH+HW0Di2ObVCgZtWCFaOgiksY2qRCOWhg3gBkhim3JvvDjQiqUhjZSCIcupLFNKlRHLbTtUVPXHifcCBXbpEL1Sps2iECENlKIYlvjuia78YAQiGMpda2cEsLY1luT1ckGWxQQX2kzde1xQrgNnCayqnCX9JsLlFA0asEKg90ymd2ZofsS8XzssKQw2J3peOFX6nDgqIV2JzooDHVnOlY4WKcORzRqwQtD3TKZF5IbwKJRC14Y6pcuWGHzljocWdceKwzVvccLyQ1gbdRCeVrjqAUvDHXLZFbYIa5EGOZjlaclQxstDPVLF7yQ7EuUzMcCYajuPV5Idu1p26NWXXusEHfvWf/iRAkhdTTaqIV1aKOFOLa1qWKJnLBPhzZ4LZE8v0kh7N5LPhPfHmpsHOKEdGgTdu2xQnjvveiYuI5RY19EVigObZWMeiQtlG8D19jNR05IhzbZqAUQquFdreg3JWR7xlihdnvVP4VGLagNYFYIt4F3KSF7FYsTOoQ2YgOYFaLYRt57r8ZexWKFZF8iDG3mrj1eiIYu4iNCWGc3HzkhPQEsG7UAQnTL5HiHEv4WC8kPNdmoBRCi2EbexKXOXsViz9IhdTCi+VgkRLEtHRMrTf1YKOy3yFgqG7UAQti9l1I7F8fClYYObcJRCyCEs7IZAVxc5MI3J/xAHQsMbcb5WCSEsS0jYxt3FYsR0hPA2nysOmoRkec3I4SbpHRs465iMUKH0MYx6P8J3zKZEnJXsTghOQGsh7bpYzPPx0KhuHuvtsqEBU5I7lpIu/aAEHbviWIbI6RDm7RrDwjF3Xt1bgaVE1qHNvyrFlZC8S2T2djGCIOENk4ovvde/WOaRdQ9Qglhf9DsLJBLvhra7K8lssJlGNuoje56/efdRSNLTG9kk7A16Cw8LNMf2iPhqAUSutwyuV6vLb7fv+pGWm+VKuwPOp23G3ToKgp37TGPZ4SuQxf1Wu3z79V2Nq1cmtI1mx/OyPXl75FIu/aAcOThlsn1Wv3n7k6Un7B/lH+E/fzU7K8zp+azko5aIKGnWybnJ2zt49pK8vRSLj298Vo/bpn/46cLjVpUusyDOSG4Pl+ie684Yd+fT07YpWLV/HZPbjKZSty1h4R+b5mcK4/f3PSS7+uHzDllLOF8LBZ6H7ooVlirN55SLqGNFQYZupB0fYm79pAwyC2TJUJtPlYNbeTXLiAMMnQhEUpHLaAQdu9JZmUlQniljfzaBYSwe68yGyHu2uNiESeEQxeZoBNaIHQKbawQ3zJZMA0sEIpHLaBwhH4HQjJ0IRDCUYuUixCcMMgtkwVCGNro7VEkDPFLFwKheNQCC+EvXdzVamWNAqF41AILueuek4qv1z7mXwHLKMsKT++/aT96qB4FF9p4Ib5lciPJ4p03xyVeyjLCvduvzc5AjWzlQhsvPLHpbUvjKBufv1+0fCmthYdfvnea6iWoSZW50gaE1t17jVy5cvezbvFSWgm3Tn51mmor2/9l86sWlsJSt0zOT9j26u/P6ISFwuHyw4Lp1PxbtvOxFsKy997LT9ju1dpH9oTlhadnH5gX76lKhTZeKLllcv5SVnZ26bWHFl7e/mh1kM4kJEctsFB4y+Snteez8aU0C0eH69S6oleZK21IKL9lcq5MjGuPQZivK014aj6rMlfakNDplsmpce1RhHtwXTEIp/8OH9qA0Hnoojhhr/afrz3PhafFR16JF++plL/BhzYg9DJ0Mb32/BHm68rAal2BQnrUwkLoa+ii+BhpT9aeiTBfV4pTU8QrMR9rI/R5y+RcGedrzz9l1xUo5EMbEHoeuijWnkbZdUWrEl17WBjglsn4N0pQ2Y9aWAgD3DI5gJDfpeOFAW6Z7C60H7WwEAa4ZbK7ULupCb9ZxwsD3DLZXVgutCGh/1smexBOPyHXtWch9H/LZGeh+g2f69qzEPq/ZbKbcNDT3jfMqIWN0P+srFzYWsp1+ruGGbWwEaKhi1kJW0u9CrHqcV17FkK0DTwT4eCd8cV7KhDakNB/bCspbBWf7+yCDkIbEqLuvaDCfrGuwI8rrmvPQgi3gYMJW+yp+ayYUQsbIbxlchBhn15XDEJegIRwVta/cPKRZ/9X04aj0Hts4+9PY/7I4wqFNij0HttIod26ogtBaIPCC98f+WZhvq7Yv/OmKuG69myE29fdzOuPBerCPK+UPTWfKo2zbIXdWrMQ5svp8lEvi7ydrIpw0MMPMesaUdY+t2hVxcKiLncvsiz2olx6/uJVhKdmI8mynV27Lmo7YVEHn8aZPlwgFbYG8lOz2CgAUU0kzGtv+yYyz4mUE4rXleKCa7K6PSxz0KWERW2tXWcOa0/6zmVdSVbuQAr1IKwWO+1HFXqwCR2n7FH5qdmzWVf8CIvK157E9YS1rUnTjuW64k9Y1MG+l7WHreIj7+qs1HSGR2F1svbEz0Z+POsaUbeyujx0O0RHYVFb99eR39wz4cVZvLIhPTX9CquPa09XuvaYdNFm+5NoXdHLj7CofO2Jfaw9k03xbclojbn8CfMaHey3N13WnuLFc1tX9PIqLCpfeyqil7JYV9pHy35OzWflXVhU+dzTyD8ULsQfeWwFEVaLdoujtuXaUzRqjD/ZR+mSFUpYlE3uKXoXbjyuK3qFFBZ1YBzo/vPiZd3rtdJRumSFFuY1NK49+Vf0XoB1Ra8ZCIvK157Nv2tP8RU90Lqi14yE1ce1p/jOVTSflviK7lyzExZ1uX2Tf+SFXFf0+g+u1d6BwWzDwAAAAABJRU5ErkJggg=="
            w={20}
          />
          <Text>CSS</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(248,224,30) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="data:image/jpeg;base64,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"
            w={20}
          />
          <Text>JavaScript</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(97,219,251) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            w={20}
          />
          <Text>React</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(119,73,189) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
            w={20}
          />
          <Text>Redux</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(130,207,245) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://www.happylifecreators.com/wp/wp-content/uploads/2022/06/chakra-ui_title2-770x528.png"
            w={20}
          />
          <Text>Chakra-UI</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(131,205,41) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="data:image/png;base64,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"
            w={20}
          />
          <Text>Nodejs</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(33,32,32) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://www.mementotech.in/assets/images/icons/express.png"
            w={20}
          />
          <Text>Expressjs</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(88,170,80) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
            w={20}
          />
          <Text>Mongodb</Text>
        </VStack>
      </Grid>

      {/* tools */}
      <Text fontSize="4xl" color={"rgb(240, 158, 6)"} mt={10}>
        Tools
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
        }}
        gap={{ base: "8", sm: "12", md: "16" }}
        mt={20}
      >
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(33,32,32) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://www.svgrepo.com/show/327408/logo-vercel.svg"
            w={20}
          />
          <Text>Vercel</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(56,193,182) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://cdn.iconscout.com/icon/free/png-256/netlify-3521601-2945045.png?f=avif&w=128"
            w={20}
          />
          <Text>Netlify</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(33,32,32) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            w={20}
          />
          <Text>Github</Text>
        </VStack>
        <VStack
          aline={"center"}
          justify={"center"}
          boxShadow={"rgb(31,156,240) 0px 4px 12px"}
          padding={"5px"}
        >
          <Image
            src="data:image/png;base64,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"
            w={20}
          />
          <Text>Vs code</Text>
        </VStack>
      </Grid>
    </Box>
  );
}

export default MySkills;
