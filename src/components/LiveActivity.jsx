import React, { useEffect, useState } from 'react';
import { GitCommit, ExternalLink } from 'lucide-react';

function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

export function LiveActivity() {
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/JustKay1029/events/public?per_page=5')
      .then((res) => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          const pushEvent = data.find((e) => e.type === 'PushEvent') || data[0];
          const repoName = pushEvent.repo.name.replace('JustKay1029/', '');
          setActivity({
            type: pushEvent.type === 'PushEvent' ? 'Pushed commit to' : 'Active on',
            repo: repoName,
            url: `https://github.com/${pushEvent.repo.name}`,
            time: timeAgo(pushEvent.created_at),
          });
        }
      })
      .catch(() => {
        // Subtle graceful fallback
        setActivity({
          type: 'Active on',
          repo: 'neetcode-gpt',
          url: 'https://github.com/JustKay1029/neetcode-gpt',
          time: 'recently',
        });
      });
  }, []);

  if (!activity) return null;

  return (
    <a
      href={activity.url}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-300 dark:border-zinc-800/90 bg-zinc-100/90 dark:bg-zinc-900/60 hover:border-zinc-400 dark:hover:border-zinc-700 text-[11px] font-mono text-zinc-700 dark:text-zinc-300 backdrop-blur-md shadow-xs transition-all duration-200 group"
      title="View recent GitHub activity"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>

      <span>
        {activity.type}{' '}
        <strong className="text-zinc-900 dark:text-white font-semibold">
          {activity.repo}
        </strong>{' '}
        <span className="text-zinc-400 dark:text-zinc-500">• {activity.time}</span>
      </span>

      <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
    </a>
  );
}
