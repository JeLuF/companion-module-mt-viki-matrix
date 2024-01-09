MT-HD0808 TCP Port 8080 commands
================================

|Function                |	 |Command|Comments|
|------------------------|---|-------|--------|
|switch	                 | T | SW Inport Outport1 Output2   |
|                        | R | SWS 1 2 3 4	                |
|check switching status  | T | GetSW	                      |
|                        | R | SWS 1 2 3 4	                |
|check software version  | T | GetMCUFWVer	                |
|                        | R | MCUVer 01.00.00              |
|TitleLabelTable         | T | SetTitleLable xxxxx	        |
|                        | R | TitleLable xxxxx	            |
|ServiceTypeTable        | T | SetServiceType xxxx	        | LCD Readout1!	 |
|                        | R | ServiceType xxxx	            |
|ServiceNumTable	       | T | SetServiceNum xxxx	          | LCD Readout2!	 |
|                        | R | ServiceNum xxxx	            |
|EDID                    | T | SetEDID Inport EdidSelect	  | 
|                        | R | InPortEdid Inport EdidSelect	|
|Set system lock status  | T | SetKeyLock 1/0               | GUI,PC->MCU;PC->GUI	 |
|                        | R | KeyLockStatus 1              | MCU->GUI,PC	 |
|check system lock status| T | GetKeyLock                   | GUI,PC->MCU	 |
|                        | R | KeyLockStatus 1              | MCU->GUI,PC	|
|check IP address        | T | GetIP	                      |
|                        | R | IP 192.168.1.186	            |
|check IP Mask           | T | GetIPMask	                  |
|                        | R | IPMask 255.255.255.0         |	
|check input HDCP        | T | GetInPortHDCP                |
|                        | R | InPortHDCPS 1 0 1 1          | can send to GUI	|
|check output HDCP       | T | GetOutPortHDCP               |
|                        | R | OutPortHDCPS 0 1 2 2         | 0:Disable HDCP,1: Enable:2 Follow Inport Hdcp	|
|set output HDCP         | T | SetOutPortHDCP Outport 0/1/2 |
|                        | R | OutPortHDCPS X1 X2 X3 X4     | X1,X2 X3 X4 is outputport HDCP status	|
|                        |   |                              | 0:off, 1:1.4, 2:2.0, 3:2.2	|
|Set EDID DATA           | T | SetEDIDData x xxxxxxxx       | x: which edid, xxxxxxxx is ASCII format 256byte |
|                        | R | SetEDIDData OK               |
|Get EDID DATA           | T | GetEDIDData x                |
|                        | R | EDIDData y xxxxxx            | y: which edid, xxxxx: data	
