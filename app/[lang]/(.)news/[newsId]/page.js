import InterceptingNews from "@/components/intercepting-news/InterceptingNews";
import Modal from "@/components/intercepting-news/Modal";
import React from "react";

const page = ({ params: { newsId } }) => {
  return (
    <Modal>
      <InterceptingNews newsId={newsId} />
    </Modal>
  );
};

export default page;
