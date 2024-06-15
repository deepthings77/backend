//created beacause we have to talk to backend again and again so we created a wrapper which takes a fn as a peraamerter and resolves it 

const asyncHandler = (requestHandler) => {

   return (req ,res ,next) => {
        Promise.resolve(requestHandler(req ,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}