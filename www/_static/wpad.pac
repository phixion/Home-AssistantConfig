function FindProxyForURL(url, host) {
 
// If the hostname matches, send direct.
    if (dnsDomainIs(host, "internal.phixion.org") ||
	shExpMatch(host, "*.phx.ms|phx.ms|pico.phx.ms") ||
        shExpMatch(host, "bnet*.akamaihd.net") ||
        shExpMatch(host, "*.blizzard.com.*.footprint.net|blizzard.com.*.footprint.net") ||
        shExpMatch(host, "*.blizzard*.akamaihd.net|blizzard*.akamaihd.net") ||
        shExpMatch(host, "*.steamstatic.com.edgesuite.net") ||
        shExpMatch(host, "*.steamstatic.com|steamstatic.com") ||
        shExpMatch(host, "bnet*.akamaihd.net.edgesuite.net") ||
        shExpMatch(host, "blzprofile.akamaized.net") ||
        shExpMatch(host, "*.dspb.akamaiedge.net|dspb.akamaiedge.net") ||
        shExpMatch(host, "*.dscd.akamai.net|dscd.akamai.net") ||
        shExpMatch(host, "*.blizzard.com|blizzard.com") ||
        shExpMatch(host, "*.plex.tv|plex.tv") ||
        shExpMatch(host, "*.blzddist*.akamaihd.net") ||
        shExpMatch(host, " blizzard.secure.footprint.net") ||
	shExpMatch(host, "*.battle.net|battle.net"))
	return "DIRECT" 
// If the protocol or URL matches, send direct.
    if (url.substring(0, 4)=="ftp:" ||
        shExpMatch(url, "http://abcdomain.com/folder/*"))
        return "DIRECT";
 
// If the requested website is hosted within the internal network, send direct.
    if (isPlainHostName(host) ||
        shExpMatch(host, "*.local") ||
        isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
        isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0") ||
        isInNet(dnsResolve(host), "192.168.0.0",  "255.255.0.0") ||
        isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"))
        return "DIRECT";
 
// If the IP address of the local machine is within a defined
// subnet, send to a specific proxy.
    if (isInNet(myIpAddress(), "10.10.10.0", "255.255.255.0"))
        return "PROXY 23.phx.ms:1984"
 
// DEFAULT RULE: All other traffic, use below proxies, in fail-over order.
    return "PROXY 23.phx.ms:1984"
}


