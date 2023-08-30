import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Box px={{xl:'105px',xs:'16px',lg:'50px'}} position='relative'>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Typography  fontSize={{xl:'56px', md:'38px', xs:'18px'}} pt={{xl:"100px",xs:'16pt',md:'70px'}} fontWeight="bold">
            Frequently Asked Questions
          </Typography>
          <Typography  fontSize={{xl:'26px', md:'19px', xs:'14px'}} pt={{xl:"24px"}} color={"#6A6A6A"}>
            Quick answer to the questions you may have
          </Typography>
        </Box>
        </Box>
        
        <Box px={{xl:'100px',xs:'16px',lg:'45px'}} pb={{xl:'92px',xs:'26px'}} pt={{xl:'30px', xs:'26px'}}>
          <Box className="test-accordian-faq" paddingY={{xl:4, md:2}}>
            <Grid container >
              <Stack display={"flex"} flexDirection={{xl:'row',lg:'row',md:"row",xs:'column',sm:'row'}}>
              <Grid item sm={6} xs={12} pr={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}} pb={{xl:'24px'}}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel1" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'} />
                      ) : (
                        <AiOutlinePlus  size={'26px'} />
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}} fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item sm={6} xs={12} pl={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}}>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel2" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'}/>
                      ) : (
                        <AiOutlinePlus  size={'26px'}/>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                   <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}}  fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              </Stack>
              <Stack display={"flex"} flexDirection={{xl:'row',lg:'row',md:"row",xs:'column',sm:'row'}}>
              <Grid item sm={6} xs={12} pr={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}} pb={{xl:'24px'}}>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel3" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'} />
                      ) : (
                        <AiOutlinePlus  size={'26px'}/>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                   <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}}  fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item sm={6} xs={12} pl={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}}>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel4" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'}/>
                      ) : (
                        <AiOutlinePlus  size={'26px'}/>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                   <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}}   fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              </Stack>
              <Stack display={"flex"} flexDirection={{xl:'row',lg:'row',md:"row",xs:'column',sm:'row'}}>
              <Grid item sm={6} xs={12} pr={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}} pb={{xl:'24px'}}>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel5" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'}/>
                      ) : (
                        <AiOutlinePlus  size={'26px'}/>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                      <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}}   fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item sm={6} xs={12} pl={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}}>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel6" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'}/>
                      ) : (
                        <AiOutlinePlus  size={'26px'}/>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                      <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}}  fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              </Stack>
              <Stack display={"flex"} flexDirection={{xl:'row',lg:'row',md:"row",xs:'column',sm:'row'}}>
              <Grid item sm={6} xs={12} pr={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}} >
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel7" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'}/>
                      ) : (
                        <AiOutlinePlus  size={'26px'}/>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                  <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}}   fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item sm={6} xs={12} pl={{xl:'15px',lg:'15px',md:'15px',sm:'15px'}}>
                <Accordion
                  expanded={expanded === "panel8"}
                  onChange={handleChange("panel8")}
                >
                  <AccordionSummary
                    expandIcon={
                      expanded === "panel8" ? (
                        <AiOutlineMinus color="#FF5016"  size={'26px'}/>
                      ) : (
                        <AiOutlinePlus  size={'26px'}/>
                      )
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                     <Box display='flex' alignItems='center'>
                      <Box
                        sx={{
                          display:'grid', 
                          placeItems:'center',
                          width:{xl:54, md: 40, xs:'24px' ,lg:'35px'},
                          height:{xl:54, md: 40, xs:'24px',lg:'35px'},
                          border: "1px solid #FF5016",
                          borderRadius: "50%",
                          marginRight:{xl:'22px',xs:'17px',lg:'20px'}
                        }}
                      >
                        <Typography color="primary" fontSize={{xl:'22px', md:'', xs:'12px'}} height={{xl:'26px',xs:'15px'}} width={{xl:'27px',xs:'15px'}}>
                        01
                        </Typography>
                      </Box>
                      <Typography sx={{wordBreak:'break-all'}}  fontSize={{xl:'26px', md:'19px', xs:'16px',lg:'17px'}} fontWeight={{xl:600,xs:600,md:600}} color={'#414141'} width={{xl:'657px',xs:'261px',lg:'430px',md:'400px'}} height={{xl:'31px',xs:'43px',lg:'30px',md:'30px'}}>
                        Lorem ipsum dolor sit amet,consectetur adipiscing elit?
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                  <Typography textAlign="justify" fontSize={{xl:'24px', md:'16px', xs:'14px'}} pl={{xl:'65px',xs:'30px',lg:'45px',md:'45px'}} pr={{xs:'30px',lg:'30px',md:'30px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              </Stack>            
            </Grid>
          </Box>
        </Box>
     

      <Footer />
  
    </>
  );
};

export default Faq;
