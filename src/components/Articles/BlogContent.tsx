import { PostInterface } from '@/types';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { ArticlePreviewBlog, ArticlesSkeleton } from '.';

export const BlogContent = ({ data, count }: { data: PostInterface[]; count: number }) => {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostInterface[]>(data);
  const [page, setPage] = useState(2);
  const bottomOfList = useRef<HTMLDivElement>(null);

  function fetchNextPosts() {
    axios.get(`/api/articles?page=${page}`).then(({ data }) => {
      setPosts((previous) => [...previous, ...data]);
      setPage((page) => page + 1);
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([target]) => {
        if (target.isIntersecting) fetchNextPosts();
      },
      {
        rootMargin: '100px',
      }
    );
    const bottom = bottomOfList.current;
    if (bottom) observer.observe(bottom);
    return () => {
      if (bottom) observer.unobserve(bottom);
    };
  }, [page]);

  return (
    <div className="blog__content">
      {isLoading || !posts.length ? (
        <ArticlesSkeleton num={6} />
      ) : (
        posts.map((post) => <ArticlePreviewBlog key={post.id} post={post} />)
      )}
      {page * 10 - 10 <= count && (
        <div ref={bottomOfList} className="blog__loader">
          intersection
        </div>
      )}
    </div>
  );
};
