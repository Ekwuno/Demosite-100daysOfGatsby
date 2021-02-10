import React from 'react'
import {  graphql, useStaticQuery } from 'gatsby'
import { FormiumForm, defaultComponents } from '@formium/react';
import { formium } from '../lib/formium';
import { Heading , Stack, Input, TextArea as ChackraTextArea,
    FormControl as ChackraFromControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button, 
    layout} from "@chakra-ui/react"
    import { Radio, RadioGroup } from "@chakra-ui/react"
import Layout from '../componets/layout';


function FormControl(props) {
    console.log(props)
    return (
        <Stack marginTop="4">
        <ChackraFromControl id={props.id}>
            <FormLabel>{props.label}</FormLabel>
            <FormHelperText>{props.description}</FormHelperText>
            {props.children}
            
        </ChackraFromControl>
        </Stack>
    )
}

function TextInput(props){
    //console.log(props)
    return (

        <FormControl>
                <Input {...props} variant="flushed" placeholder={props.placeholder} required={props.required}/>
                <FormErrorMessage></FormErrorMessage>
        </FormControl>
       
  
        
        
    )   
    
}

// function RadioEax (props){
//   console.log(props)
//   const [value, setValue] = React.useState("1")
//   return (
//     <RadioGroup onChange={setValue} value={value}>
//       <Stack direction="row">
//         <Radio value="1">{props}</Radio>
//         <Radio value="2">Second</Radio>
//         <Radio value="3">Third</Radio>
//       </Stack>
//     </RadioGroup>
//   )
// }

function TextArea(props){
    return (
        <FormControl>
            <ChackraTextArea {...props} />
        </FormControl>


    )
}

function Header(props){
    const { page: {title} } = props
    
    return (
        <Heading as="h4" marginTop="4" marginBottom="4">{title}</Heading>
    )
}

function SubmitButton(props){
    return(
        <Button colorScheme="teal" size="md" {...props} />
    )
   
}

// Always define these outside of React so that
// components are not needlessly recreated on each render
const myComponents = {
    ...defaultComponents,
    TextInput,
    Header,
    FormControl,
    TextArea,
    SubmitButton,
    // RadioEax,

}

const AudioCoreForm = ()=> {
    const { formiumForm } = useStaticQuery(query)
    const [success, setSuccess] = React.useState(false)

    if (success) {
        return <div>Form submited </div>;
    }

    return (
      <Layout>

        <FormiumForm 
            data={formiumForm}
            components={myComponents}
            onSubmit={async (values) => {
                // Send form values to Formium
                await formium.submitForm('100daysform', values);
                setSuccess(true);
            
            }}
        />
      </Layout>
        
    )
    
}

export const query = graphql`
  {
    formiumForm(slug: { eq: "100daysform" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`

export default AudioCoreForm