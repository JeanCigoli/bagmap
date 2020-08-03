import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  ContainerAll,
  ContainerPost,
  DivPost,
  HeaderPost,
  ImgPost,
  DescriptionPost,
  FooterPost,
  ViewPlus,
} from "./styled";
import Avatar from "@material-ui/core/Avatar";
import Header from "./Header";
import { RiMapPinAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "store/modules/modal/actions";
import {
  clearPosts,
  clearPost,
  fetchPosts,
  fetchPostsPlus,
} from "store/modules/posts/action";
import Add from "./Add";
import { formatDate } from "utils";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ButtonPrimary } from "components/Button";

const Posts = () => {
  const dispatch = useDispatch();

  const fetching = useSelector((state) => state.posts.fetching);
  const post = useSelector((state) => state.posts.post);
  const posts = useSelector((state) => state.posts.posts);

  const [page, setPage] = useState(0);

  useEffect(() => {
    dispatch(fetchPosts(page, 10));

    return () => {
      dispatch(clearPosts());
    };
  }, []);

  useEffect(() => {
    if (fetching) {
      dispatch(showModal("open", 1));
    } else {
      dispatch(showModal("close", 1));
    }
  }, [fetching]);

  useEffect(() => {
    if (post) {
      dispatch(showModal("close", 25));
      dispatch(clearPosts());
      dispatch(fetchPosts(0, 20));
    }
  }, [post]);

  const handlePost = () => {
    setPage(page + 1);
    dispatch(fetchPostsPlus(page + 1, 10));
  };

  return (
    <Container>
      <Title>Histórias</Title>

      <ContainerAll>
        <Header />

        <ContainerPost>
          {posts &&
            posts.content.map((data) => (
              <DivPost key={data.idPosts}>
                <HeaderPost>
                  <Avatar
                    variant="rounded"
                    style={{ width: 50, height: 50 }}
                    src={data.person.image}
                  />

                  <div className="data">
                    <h3>{data.person.namePerson}</h3>

                    <p>{data.location}</p>
                  </div>
                </HeaderPost>

                <ImgPost>
                  <Carousel
                    stopOnHover={true}
                    showThumbs={false}
                    infiniteLoop={true}
                    showStatus={false}
                    showArrows={true}
                    showIndicators
                  >
                    {data.images.map((image) => (
                      <img
                        style={{ height: 250, objectFit: "cover" }}
                        key={image.id}
                        src={image.link}
                        alt={data.location}
                      />
                    ))}
                  </Carousel>
                </ImgPost>

                <DescriptionPost>
                  <p>{data.description}</p>
                </DescriptionPost>

                <FooterPost>
                  <p>Criado em: {formatDate(data.createdAt)}</p>
                </FooterPost>
              </DivPost>
            ))}
        </ContainerPost>

        {posts && (
          <>
            {posts.last === false && (
              <ViewPlus>
                <div className="button">
                  <ButtonPrimary
                    type="button"
                    text="Ver mais"
                    icon={<RiMapPinAddLine />}
                    onClick={handlePost}
                  />
                </div>
              </ViewPlus>
            )}
          </>
        )}
      </ContainerAll>

      <Add />
    </Container>
  );
};

export default Posts;
