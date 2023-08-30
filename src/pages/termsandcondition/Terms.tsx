import { Box, IconButton, Typography } from "@mui/material"
import { IoArrowBackOutline } from "react-icons/io5"
import Footer from "../../components/footer/Footer"
import TermsTypography from "../../components/termstypography/TermsTypography"
import Address from "../../components/address/Address"

const Terms = () => {
  return (
    <>
    <Box px={{xl:'105px' , md:'50px',xs:'20px'}} textAlign='justify'>
        {/* <Box pt={{xl:"46px"}}><IconButton><IoArrowBackOutline/></IconButton></Box> */}
        <Box  pb={{xl:'92px',xs:'26px'}}>
          <Box   sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}>

            <Typography pt={{xl:'60px',xs:'16px', md:'70px'}} fontSize={{xl:'56px', md:'38px', xs:'24px'}} fontWeight='bold'>Terms & Conditions</Typography>
            <Typography pt={{xl:"24px"}} fontSize={{xl:'26px', xs:'16px'}} color='#6A6A6A'>Last Updated :22 january,2023</Typography>
          </Box>
                 <Typography fontSize={{xl:'26px', xs:'16px'}} variant="subtitle2" pt={{xl:'60px',xs:'16px'}}>Welcome to www.oncolabs.info. This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.</Typography>
                 <TermsTypography subheading={'1. YOUR AGREEMENT'} discriptionPara1={'By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site.'} discriptionPara2={'PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions. '}/>
                 <TermsTypography subheading={'2. PRIVACY'} discriptionPara1={'Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.'}/>
                 <TermsTypography subheading={'3. LINKED SITES'} discriptionPara1={'This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own independent judgment regarding your interaction with these Linked Sites.'}/>
                 <TermsTypography subheading={'4. FORWARD LOOKING STATEMENTS'} discriptionPara1={'All materials reproduced on this site speak as of the original date of publication or filing. The fact that a document is available on this site does not mean that the information contained in such document has not been modified or superseded by events or by a subsequent document or filing. We have no duty or policy to update any information or statements contained on this site and, therefore, such information or statements should not be relied upon as being current as of the date you access this site.'}/>
                 <TermsTypography subheading={'5. OUR PROPRIETARY RIGHTS '} discriptionPara1={' This Site and all its Contents are intended solely for personal, non-commercial use. Except as expressly provided, nothing within the Site shall be construed as conferring any license under our or any third partys intellectual property rights, whether by estoppel, implication, waiver, or otherwise. Without limiting the generality of the foregoing, you acknowledge and agree that all content available through and used to operate the Site and its services is protected by copyright, trademark, patent, or other proprietary rights. You agree not to: (a) modify, alter, or deface any of the trademarks, service marks, trade dress (collectively "Trademarks") or other intellectual property made available by us in connection with the Site; (b) hold yourself out as in any way sponsored by, affiliated with, or endorsed by us, or any of our affiliates or service providers; (c) use any of the Trademarks or other content accessible through the Site for any purpose other than the purpose for which we have made it available to you; (d) defame or disparage us, our Trademarks, or any aspect of the Site; and (e) adapt, translate, modify, decompile, disassemble, or reverse engineer the Site or any software or programs used in connection with it or its products and services.'} discriptionPara2={'The framing, mirroring, scraping or data mining of the Site or any of its content in any form and by any method is expressly prohibited.'} />
                 <TermsTypography subheading={'6. INDEMNITY'} discriptionPara1={'By using the Site web sites you agree to indemnify us and affiliated entities (collectively "Indemnities") and hold them harmless from any and all claims and expenses, including (without limitation) attorneys fees, arising from your use of the Site web sites, your use of the Products and Services, or your submission of ideas and/or related materials to us or from any persons use of any ID, membership or password you maintain with any portion of the Site, regardless of whether such use is authorized by you. '}/>
                 <TermsTypography subheading={'7. COPYRIGHT AND TRADEMARK NOTICE'} discriptionPara1={'Except our generated dummy copy, which is free to use for private and commercial use, all other text is copyrighted. generator.lorem-ipsum.info © 2013, all rights reserved '}/>
                 <TermsTypography subheading={'8. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS'} discriptionPara1={'It is our policy to respond expeditiously to claims of intellectual property infringement. We will promptly process and investigate notices of alleged infringement and will take appropriate actions under the Digital Millennium Copyright Act ("DMCA") and other applicable intellectual property laws. Notices of claimed infringement should be directed to: '}/>               
                 <Address website={'generator.lorem-ipsum.info'} street={' 126 Electricov St.'} cityandpin={'Kiev, Kiev 04176   '} country={'USA'} email={'contact@lorem-ipsum.info'}/>                           
        </Box>
    </Box>
 <Footer/>
    </>
  )
}

export default Terms