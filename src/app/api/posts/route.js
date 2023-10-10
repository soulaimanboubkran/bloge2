import prisma from "@/utils/connect";
import { NextResponse } from "next/server";




export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const cat = searchParams.get("cat"); // Parse the page parameter as an integer, default to 1 if not provided or not a valid integer.
    const POST_PER_PAGE = 2;
    const query={
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where:{
            ...(cat && {catSlug:cat})
        },
    }

    try {
    
        // Handle the case where the page parameter is not positive.
       const[ posts ,count]= await prisma.$transaction([
        prisma.post.findMany(query),
        prisma.post.count({where:query.where}),
       ]);
  
      return new NextResponse(JSON.stringify({posts,count}, { status: 200 }));
      
  
      
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };
  