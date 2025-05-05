// src/App.js
import React, { useEffect, useState, useRef } from 'react';
import FilterBar from './components/Filters';
import PostList from './components/PostList';
import Pagination from './components/Pagination';

const POSTS_PER_PAGE = 10;

const App = () => {
  const [userId, setUserId] = useState('');
  const [tag, setTag] = useState('');
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const abortControllerRef = useRef(null);

  const fetchPosts = async () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setError('');
    try {
      let url = 'https://jsonplaceholder.typicode.com/posts';
      if (userId) url += `?userId=${userId}`;

      const res = await fetch(url, { signal: controller.signal });
      if (!res.ok) throw new Error('Failed to fetch');

      const data = await res.json();

      // Mock tags
      const taggedPosts = data.map((post, index) => ({
        ...post,
        tag: index % 2 === 0 ? 'urgent' : 'normal',
      }));

      const tagFiltered = tag
        ? taggedPosts.filter((item) => item.tag === tag)
        : taggedPosts;

      setFilteredPosts(tagFiltered);

      const start = (page - 1) * POSTS_PER_PAGE;
      const paginated = tagFiltered.slice(start, start + POSTS_PER_PAGE);
      setPosts(paginated);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line
  }, [userId, tag, page]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const handleFilterChange = (newUserId, newTag) => {
    setUserId(newUserId);
    setTag(newTag);
    setPage(1);
  };

  const handleReset = () => {
    setUserId('');
    setTag('');
    setPage(1);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Dynamic Posts Viewer</h1>

      <FilterBar
        userId={userId}
        tag={tag}
        onFilterChange={handleFilterChange}
        onReset={handleReset}
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <>
          <PostList posts={posts} />

          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={(newPage) => setPage(newPage)}
          />

          <p style={{ fontSize: '14px', marginTop: '0.5rem' }}>
            Showing {posts.length} of {filteredPosts.length} results.
          </p>
        </>
      )}
    </div>
  );
};

export default App;
