import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const AccordionComponent = () => {
  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "black", color: "white" }}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              How flexible are Cowork's membership plans?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Cowork's membership plans are designed to be highly flexible, offering
          options that cater to various needs and preferences. They typically
          include choices such as part-time access, full-time access, dedicated
          desks, and private office spaces, allowing members to select the plan
          that best suits their work style and requirements.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "black", color: "white" }}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              What kind of events and networking opportunities does Cowork
              provide?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Cowork provides workshops, seminars, networking events, panel
          discussions, coworking days, social events, and mentorship programs to
          support members in learning, collaborating, and building their
          professional networks.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "black", color: "white" }}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              Can I tour the Cowork space before committing to a membership?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Yes, Cowork offers tours of their spaces so potential members can
          explore the facilities, meet the community, and get a feel for the
          environment before committing to a membership.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "black", color: "white" }}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              Is Cowork suitable for remote teams and distributed workforces?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Yes, Cowork is suitable for remote teams and distributed workforces.
          It provides flexible workspaces equipped with amenities like
          high-speed internet, meeting rooms, and coworking areas that support
          collaborative work and productivity for remote teams.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "black", color: "white" }}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              What measures does Cowork take for environmental sustainability?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Cowork takes measures for environmental sustainability by implementing
          practices such as energy-efficient lighting and appliances, recycling
          programs, reducing paper waste through digital solutions, and
          promoting eco-friendly transportation options
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "black", color: "white" }}>
            <Box as="span" flex="1" textAlign="left" fontWeight="semibold">
              Still has questions?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          If you have any more questions or need further assistance, feel free
          by reaching out to our email.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionComponent;
